/*
包含基本天气、温度、风力风向等，可按地名、城市编号、IP查询。
支持最多30个城市ID同时查询。
请求方式及url：

请求方式：GET

线路1(推荐)：https://v0.yiketianqi.com/free/week

线路2：https://yiketianqi.com/free/week

请求示例：

https://www.yiketianqi.com/free/week?unescape=1&appid=&appsecret=

cityid、city和ip参数3选一提交，如果不传，默认返回当前ip城市天气，cityid优先级最高。

响应内容：天气信息

1.输入城市名点击回车
2.查询数据
3.渲染数据
*/



var app = new Vue({
    el: '#app',
    data: {
        city: '',
        weather_list: []
    },
    methods: {
        searchWeather: function() {
            // console.log('天气查询')
            var that = this;
            axios.get('https://v0.yiketianqi.com/free/week?unescape=1&appid=37755933&appsecret=kJHCp1bX&' + this.city)
                .then(function(response) {
                    console.log(that.city, response.data.data);
                    that.weather_list = response.data.data;
                })
                .catch(function(err) {

                })
        },
        otherCity: function(city) {
            this.city = city;
            this.searchWeather();

        }
    },
})