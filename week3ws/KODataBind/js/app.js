function viewModel(){
    this.FirstName=ko.observable();
    this.LastName=ko.observable();
    this.FullName=ko.computed(function(){
        return this.FirstName()+" "+this.LastName();
    })
}
ko.applyBindings(viewModel);