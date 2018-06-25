Vue.nextTick(function() {
    var action = new Vue({
        data: {
            items: [{
                name: 'Foo',
                attack: 20,
                blood: 80,
                action: function() {
                    console.log(1);
                }
            }, {
                name: 'Bar',
                attack: 30,
                blood: 80,
                action: function() {
                    console.log(2);
                }
            }]
        }
    });
    action.$mount('#action');
    console.log(action.items);
})
