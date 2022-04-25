<script>
import DateInput from "./inputs/DateInput.vue";
import TimeInput from "./inputs/TimeInput.vue";
import SingleLineInput from "./inputs/SingleLineInput.vue";
import MultiLineInput from "./inputs/MultiLineInput.vue";
import IconInput from "./inputs/IconInput.vue";

const mapTypeToComponent = {
    "date": DateInput,
    "time": TimeInput,
    "text": SingleLineInput,
    "longtext": MultiLineInput,
    "icons": IconInput
};

export default {
    name: "InputField",

    components: {
        DateInput,
        TimeInput,
        SingleLineInput,
        MultiLineInput,
        IconInput
    },

    props: {
        value: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        additional: {
            type: String,
            default: "[]"
        }
    },

    render: function(h) {
        const self = this;
        return h(mapTypeToComponent[this.type], {
            props: {
                value: this.value,
                additional: this.additional
            },
            on: {
                input: function(payload) {
                    self.$emit("input", payload);
                    self.$emit("stopEditMode");
                }
            },
            domProps: {
                value: self.value
            }
        });
    }
};
</script>
