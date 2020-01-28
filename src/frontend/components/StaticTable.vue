<template>
    <div>
        <RowFilters v-show="loaded"
                    v-model="activeHeads"
                    :heads="heads" />
        <template v-for="year in yearData">
            <h2 :key="'header_' + year.year"
                class="header">
                {{ year.year }}
            </h2>
            <table v-if="getActiveHeads.length > 0"
                   :key="'table_' + year.year"
                   class="table">
                <tbody>
                    <template v-if="mobile">
                        <tr>
                            <th class="cell">
                                {{ heads[0].name }}
                            </th>
                            <th class="cell">
                                Information
                            </th>
                        </tr>
                        <template v-for="(quarter, index) in year.rowsByQuarter">
                            <tr :key="`quarter_${index}`">
                                <TableGroupHeader :text="`Quartal ${index + 1}`"
                                                  :cols="2"
                                                  :open="showQuarter(year.year + '_' + index)"
                                                  @click.native="toggleQuarter(year.year + '_' + index)" />
                            </tr>
                            <template v-if="showQuarter(year.year + '_' + index)">
                                <tr v-for="row in quarter"
                                    :key="row.fields[heads[0].id]">
                                    <td class="cell cell--date">
                                        <CellContent :head="heads[0]"
                                                     :content="row.fields[heads[0].id]" />
                                        <EditButton :heads="getActiveHeads.slice(1)"
                                                    :row="row"
                                                    @updated="setData" />
                                    </td>
                                    <td class="cell">
                                        <ul class="list">
                                            <li v-for="head in getActiveHeads.slice(1)"
                                                :key="head.id">
                                                <strong> {{ head.name }}: </strong>
                                                <CellContent :head="head"
                                                             :content="row.fields[head.id]" />
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </template>
                    <template v-else>
                        <tr>
                            <th v-for="head in getActiveHeads"
                                :key="head.id"
                                class="cell cell--head">
                                {{ head.name }}
                            </th>
                        </tr>
                        <template v-for="(quarter, index) in year.rowsByQuarter">
                            <tr :key="`quarter_${index}`">
                                <TableGroupHeader :text="`Quartal ${index + 1}`"
                                                  :cols="getActiveHeads.length"
                                                  :open="showQuarter(year.year + '_' + index)"
                                                  @click.native="toggleQuarter(year.year + '_' + index)" />
                            </tr>
                            <template v-if="showQuarter(year.year + '_' + index)">
                                <tr v-for="row in quarter"
                                    :key="row.fields[heads[0].id]">
                                    <td v-for="(head, headIndex) in getActiveHeads"
                                        :key="head.id"
                                        class="cell"
                                        :class="headIndex === 0 ? 'cell--date' : ''">
                                        <CellContent :head="head"
                                                     :content="row.fields[head.id]" />
                                        <EditButton v-if="headIndex === 0"
                                                    :heads="getActiveHeads.slice(1)"
                                                    :row="row"
                                                    @updated="setData" />
                                    </td>
                                </tr>
                            </template>
                        </template>
                    </template>
                </tbody>
            </table>
        </template>
    </div>
</template>

<script>
import CellContent from "./CellContent.vue";
import EditButton from "./EditButton.vue";
import TableGroupHeader from "./TableGroupHeader.vue";
import RowFilters from "./RowFilters.vue";
import {responsiveMixin} from "./mixins/responsive";
import {getHeaders, getConfig, getRowsForYear, getData} from "../services/api";

export default {
    name: "StaticTable",

    components: {
        CellContent,
        EditButton,
        TableGroupHeader,
        RowFilters
    },

    mixins: [responsiveMixin],

    data() {
        return {
            heads: [],
            activeHeads: [],
            configStaticFields: [],
            yearData: [],
            mobile: true,
            activeQuarters: [],
            years: [new Date().getFullYear()],
            loaded: false
        };
    },

    computed: {
        getActiveHeads: function() {
            return this.heads.filter((head) => head.active);
        }
    },

    watch: {
        activeHeads: function() {
            localStorage.setItem("activeHeadsStatic", JSON.stringify(this.activeHeads));
            this.heads.forEach((head, index) => {
                head.active = this.activeHeads[index];
            });
        }
    },

    async mounted() {
        const wrapper = document.getElementById("epp_app_static_wrapper");
        if (wrapper) {
            this.years = wrapper.dataset.years.split(",").map(year => parseInt(year));
        }
        this.activeQuarters.push(new Date().getFullYear() + "_" + Math.floor((new Date()).getMonth() / 3));
        await this.setData();
    },

    methods: {
        async setData() {
            const data = await getData();
            this.configStaticFields = getConfig(data).static_fields;
            this.heads = getHeaders(data);
            while (this.yearData.length) {
                this.yearData.pop();
            }
            this.years.forEach((year) => {
                this.yearData.push({
                    year,
                    rowsByQuarter: getRowsForYear(data, year)
                });
            });
            if (localStorage.getItem("activeHeadsStatic")) {
                const cachedActiveHeads = JSON.parse(localStorage.getItem("activeHeadsStatic"));
                if (cachedActiveHeads.length === this.heads.length) {
                    this.activeHeads = cachedActiveHeads;
                }
            }
            // that is, not used the ones from cache because not set or not fitting
            if (this.activeHeads.length !== this.heads.length) {
                this.activeHeads = this.heads.map(head => {
                    return this.configStaticFields.indexOf(parseInt(head.id)) > -1;
                });
            }
            this.loaded = true;
        },
        showQuarter(quarterId) {
            return this.activeQuarters.indexOf(quarterId) > -1;
        },
        toggleQuarter(quarterId) {
            const index = this.activeQuarters.indexOf(quarterId);
            if (index === -1) {
                this.activeQuarters.push(quarterId);
                return;
            }
            this.activeQuarters.splice(index, 1);
        }
    }
};
</script>

<style scoped>
  .header {
    text-align: left;
  }
  .table {
    box-sizing: border-box;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid grey;
    text-align: left;
    border-bottom: none;
  }
  .cell {
    padding: 10px;
    border-bottom: 1px solid grey;
  }
  .cell:not(:last-child) {
    border-right: 1px solid gray;
  }
  .list {
    padding-left: 20px;
    margin: 0;
  }
  .edit-button {
    width: 25px;
    height: 25px;
  }
</style>
