export function sortByOrderId(head1, head2) {
    const head1OrderId = parseInt(head1.order_id);
    const head2OrderId = parseInt(head2.order_id);
    if (head1OrderId < head2OrderId) {
        return -1;
    }
    return (head1OrderId > head2OrderId) ? 1 : 0;
}