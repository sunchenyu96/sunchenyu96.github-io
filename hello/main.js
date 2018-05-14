(function name(params) {
  const meetDate = new Date('2018/5/11');
  const nowDate = new Date();
  const moviebtn = document.getElementById('moviebtn');
  const moviediv = document.getElementsByClassName('movie')[0];
  const moviefile = document.getElementById('movie-file');
  const closebtn = document.getElementsByClassName('close')[0];
  const weatherbtn = document.getElementById('weatherbtn');
  const jokebtn = document.getElementById('jokebtn');
  const chatbtn = document.getElementById('chatbtn');

  console.log(closebtn);

  const getDays = (meetDate) => {
    
    return Math.ceil((nowDate - meetDate)/1000/3600/24);
  }

  const showMovie = () => {
    moviediv.style.display = 'block';
    moviefile.style.display = 'block';
  }

  const closeMovie = () => {
    moviediv.style.display = 'none';
    moviefile.style.display = 'none';
  }

  const great = document.getElementById('meeting-great');
  const date = document.getElementById('date');
  
  const btnUnOpen = () => {
    alert('暂未开放！敬请期待！');
  }

  date.innerHTML = nowDate.toDateString();
  great.innerHTML = "第" + getDays(meetDate) + "天";

  moviebtn.addEventListener('click', showMovie ,false);
  closebtn.addEventListener('click', closeMovie ,false);

  weatherbtn.addEventListener('click', btnUnOpen ,false);
  jokebtn.addEventListener('click', btnUnOpen ,false);
  chatbtn.addEventListener('click', btnUnOpen ,false);
})();