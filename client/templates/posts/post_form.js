/**
 * Created by Michael on 10/29/2015.
 */


Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    var title = event.target.title.value;
    var url = event.target.url.value;

    Meteor.call("addPost", title, url);

    template.find("form").reset();
  }
});