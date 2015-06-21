Template.gameCollection.helpers({
  gamePrice: function() {
    return this.price.sale_value ? this.price.sale_value : this.price.original_value;
  }
});
