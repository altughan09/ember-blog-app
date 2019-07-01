import Route from '@ember/routing/route';

export default Route.extend({
    model: function () {
        return this.store.findAll('post');
    },
    actions: {
        createPost: function (model) {
          let post = this.store.createRecord('post', {
            title: model.title,
            text: model.text,
            author: model.author,
            createdDate: new Date()
          });
          post.save();
        }
    }
});
