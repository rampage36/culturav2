import newsFeedReducer from './news-feed-reducer.js'

let store ={
    _state: { 
        musicPage: {
            music1: [
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1162968250&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1340694760&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1161741805&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1162968250&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1340694760&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1161741805&visual=true" },
                {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" }
              ] 
        },
        newsPage: {
            posts: [
                {postdata: "Ut at purus vitae sapien malesuada rutrum. Praesent et lacus in augue bibendum consectetur. Pellentesque quam ante, fringilla a dapibus sit amet, interdum vel velit. Nulla a ante at risus congue luctus. Nam porttitor risus quis enim tempus, mollis hendrerit odio gravida. Sed justo enim, ultricies eu augue in, hendrerit dictum erat. In dignissim ultricies urna at tincidunt. Proin vel nulla congue, fermentum mauris ut, volutpat lectus. Fusce risus lacus, volutpat eget sem in, faucibus consequat ex. Morbi placerat pellentesque leo." },
                {postdata: "Maecenas non lorem elementum, venenatis leo ac, tincidunt libero. Maecenas dignissim varius vulputate. Sed efficitur urna massa, quis finibus eros auctor at. Nunc vehicula at elit eu vehicula. Ut ullamcorper laoreet velit a gravida. Aliquam quis tempor ligula. Pellentesque lacinia nisi et blandit tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae pellentesque lorem."},
                {postdata: "Maecenas id mauris suscipit est fringilla egestas. Nunc vitae vulputate felis. Cras a nisi sit amet ex rutrum auctor. Ut porttitor sodales mi, eu ornare neque hendrerit vitae. Phasellus ut orci pharetra, dignissim libero vitae, euismod nulla. Curabitur mollis dui non enim gravida bibendum. Vivamus porttitor eget neque ac volutpat."},
                {postdata: "Donec porttitor felis vitae ligula vestibulum, in maximus mauris laoreet. Nunc egestas nisl non nunc consequat efficitur. Ut finibus, mauris eget maximus venenatis, ipsum augue egestas libero, nec pretium arcu risus at ex. Proin nec ultricies quam. Donec sagittis commodo sem. Sed eget aliquam elit. Duis molestie urna venenatis ornare pulvinar. Cras scelerisque pulvinar nunc, a fringilla ex molestie id. Duis vel justo vel orci pharetra cursus vel nec augue. Ut condimentum ex ut libero interdum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sem arcu, fringilla nec condimentum ut, sagittis id turpis. Vivamus posuere nisi quis est pellentesque venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum ornare pharetra."}
                    ],
                newPostText: "New post text"
        },
        videoPage: {
            video1: [
                {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
                {url: "https://www.youtube.com/embed/Ip9IuT98Teg"  },
                {url: "https://www.youtube.com/embed/dM3unztDqAQ"  },
                {url: "https://www.youtube.com/embed/R0wtqiKPxPk"  },
                {url: "https://www.youtube.com/embed/wOoGqzBsKLE"  },
                {url: "https://www.youtube.com/embed/Lale88ntXlI"  }
                    ]
        }
},
    getState() {
        return this._state;
    }, 

    subscribe(observer){
        this._reRender = observer;},
    
    _reRender() {
            console.log('State was changed...')
    }, 

    dispatch(action) {

        newsFeedReducer(this._state.newsPage, action);
        
        this._reRender(this._state);
    }
}


export default store; 