function videoPlay(id) {
  const urlSecreta = 'https://secreto.com/'+id;
  console.log(urlSecreta);
};

function videoPause(id) {
  const urlSecreta = 'https://secreto.com/'+id;
  console.log('pause')
}

class Class {
    constructor({
        name,
        description,
        videoID
    }) {
        this.name = name;
        this.description = description
        this.videoID = videoID
    }

    reproducir() {
      videoPlay(this.videoID)
    }

    pausar() {
      videoPause(this.videoID)
    }

};

export default Class
