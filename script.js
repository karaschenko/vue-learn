new Vue({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true,
        },
        customClass: '',
        progressBarStyle : {
            progress: {
                height: '100%',
                background : 'red',
                width: 0,
            }
        }
    },
    methods: {
        startEffect: function() {
            var vm = this;
            setInterval(function() {
                vm.effectClasses.highlight = !vm.effectClasses.highlight;
                vm.effectClasses.shrink = !vm.effectClasses.shrink;
            }, 1000);
        },
        startIncrease: function() {
            var vm = this;
            var counter = 0;
            setInterval(function() {
                counter +=10;
                console.log(counter)
                vm.progressBarStyle.progress.width = counter + 'px';
            }, 1000);

        }
    }
});
