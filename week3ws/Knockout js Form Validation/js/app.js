function formValidation() {
    var self = this;
    self.firstName = ko.observable("").extend({
        validation: {
            message: "First Name Required",
            validator: function (val) {
                return val.length > 0
            }
        }
    });

    self.lastName = ko.observable("").extend({
        validation: {
            message: "Last Name Required",
            validator: function (val) {
                return val.length > 0
            }
        }
    });

    self.gender = ko.observable("").extend({
        validation: {
            message: "Gender Required",
            validator: function (val) {
                return val.length > 0
            }
        }
    })

    self.emailaddress = ko.observable("").extend({
        required: true,
        email: true
    });

    self.course = ko.observableArray().extend({
        required: true
    });

    self.Submit = function () {
        const data = {
            FirstName: self.firstName(),
            LastName: self.lastName(),
            Gender: self.gender(),
            Email: self.emailaddress(),
            Course: self.course()
        }
        var err = ko.validation.group(self);
        if (err().length > 0) {
            err.showAllMessages();
            return false;
        }
        else {
            const myJSON = JSON.stringify(data);
            console.log(myJSON);
        }
    }
}

ko.applyBindings(new formValidation());



