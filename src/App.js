import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')

  const [movies] = useState (
    [
      {
        name: 'Gintama: The Final',
        genre: 'Action, Comedy, Drama, Sci-Fi',
        image: 'https://cdn.myanimelist.net/images/anime/1245/116760.jpg',
        overview: "Gintama: The Movie: The Final Chapter: Be Forever Yorozuya (劇場版 銀魂 完結篇 万事屋よ永遠なれ, Gekijōban Gintama Kanketsu-hen: Yorozuya yo Eien Nare) is a 2013 Japanese animated film produced by Sunrise based on the Gintama manga and anime series. It was directed by the director from the anime series Yoichi Fujita and based on a story by Hideaki Sorachi, Gin Tama's original author.[2] It stars Tomokazu Sugita, Daisuke Sakaguchi, Rie Kugimiya among others. The film focuses on the freelancer samurai Gintoki Sakata in a time travelling story where he encounters older personas of the people he met in Edo. The Final Chapter was first announced August 2012 although major details were not released until early 2013. Although the film has been marketed as Final Chapter Sorachi and Fujita did not confirm it was the last anime production from Gin Tama; the former wrote the story with the concept of the series' ending. Two themes were provided by the bands SPYAIR and Tommy heavenly6, with latter's song having already been used in the television series."
      },
      {
        name: 'Koe no Katachi',
        genre: 'Drama',
        image: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
        overview: 'As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouyas reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.'
      },
      {
        name: 'Violet Evergarden Movie',
        genre: 'Drama, Fantasy, Slice of Life',
        image: 'https://cdn.myanimelist.net/images/anime/1825/110716.jpg',
        overview: "Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for Auto Memory Dolls. Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear. Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, I love you, may still be alive even after the many years that have passed."
      },
      {
        name: 'Kimi no Na wa',
        genre: 'Drama, Romance, Supernatural',
        image: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
        overview: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture. One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance."
      },
      {
        name: 'Kizumonogatari III',
        genre: 'Action, Mystery, Supernatural',
        image: 'https://cdn.myanimelist.net/images/anime/1084/112813.jpg',
        overview: "After helping revive the legendary vampire Kiss-shot Acerola-orion Heart-under-blade, Koyomi Araragi has become a vampire himself and her servant. Kiss-shot is certain she can turn him back into a human, but only once regaining her full power. Araragi has hunted down the three vampire hunters that defeated Kiss-shot and retrieved her limbs to return her to full strength. However, now that Araragi has almost accomplished what he’s been fighting for this whole time, he has to consider if this is what he really wants. Once he revives this powerful immortal vampire, there is no telling what she might do, and there would be no way of stopping her. But there is more to the story that Araragi doesn’t understand. If a newborn vampire like him could defeat the hunters, how did they overpower Kiss-shot? Can he trust her to turn him back to a human? And how is that even possible in the first place? Araragi is at his limit but he must come to a decision, and it may not be possible to resolve this situation without doing something he’ll regret."
      },
      {
        name: 'Sen to Chihiro no Kamikakushi',
        genre: 'Adventure, Drama, Supernatural',
        image: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
        overview: "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way. Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home."
      },
      {
        name: 'Heavens Feel',
        genre: 'Action, Fantasy, Supernatural',
        image: 'https://cdn.myanimelist.net/images/anime/1142/112957.jpg',
        overview: "he Fifth Holy Grail War in Fuyuki City has reached a turning point in which the lives of all participants are threatened as the hidden enemy finally reveals itself. As Shirou Emiya, Rin Toosaka, and Illyasviel von Einzbern discover the true, corruptive nature of the shadow that has been rampaging throughout the city, they realize just how dire the situation is. In order to protect their beloved ones, the group must hold their own against the seemingly insurmountable enemy force—even if some of those foes were once their allies, or perhaps, something more intimate. As the final act of this chaotic war commences, the ideals Shirou believes will soon be challenged by an excruciating dilemma: is it really possible to save a world where everything seems to have gone wrong?"
      },
      {
        name: 'Mugen Ressha-hen',
        genre: 'Supernatural',
        image: 'https://cdn.myanimelist.net/images/anime/1704/106947.jpg',
        overview: "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the flame pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand. Unbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. Kimetsu no Yaiba Movie: Mugen Ressha-hen delves into the deepest corners of Tanjirou's mind, putting his resolve and commitment to duty to the test."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
              <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>MOONVIE</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "ActivedHome">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="WLButton">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>
                    <h5>{movie.genre}</h5>
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>Add to Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h4>MOONVIE</h4>
            </li>
        </ul>
      </div>
      <div className = "OverviewHeader" >
          <h5>Overview</h5>
          </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image}></img>
              <div className = "MovieOverview">
                <p>{movie.overview}</p>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back</h5>
            </div>
          ))}
          </div>
      </div>
      
      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>MOONVIE</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;
