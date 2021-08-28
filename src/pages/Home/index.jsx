import React from 'react';
import './styles.css';

import { useCallback, useEffect } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useState } from 'react';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !searchValue ?
  allPosts.filter( post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
  })
  : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(page, postsPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

const loadMorePosts = () => {

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);

  }

  const handleChange = (e) => {
      const { value } = e.target;

      setSearchValue(value);
  }

      return (
      <section className="container">
        <div className="search-container">

          {!!searchValue && (
            <h1>Seaarch Value: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleChange={handleChange} />

        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não exitem mais posts</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load More Posts"
              onClick={loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>

      </section>

    );

}


// export class Home2 extends Component {
//   // state = {
//   //   posts: [],
//   //   allPosts: [],
//   //   page: 0,
//   //   postsPerPage: 10,
//   //   searchValue: '',
//   // };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postAndPhotos = await loadPosts();

//     this.setState({
//       posts: postAndPhotos.slice(page, postsPerPage),
//       allPosts: postAndPhotos
//     });
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts,
//     } = this.state;

//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage })

//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   }

//   render() {

//     const { posts, page, allPosts, postsPerPage, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !searchValue ? allPosts.filter(
//       post => {
//         return post.title.toLowerCase().includes(
//           searchValue.toLowerCase()
//         );
//       }) : posts;

//     return (
//       <section className="container">
//         <div className="search-container">

//           {!!searchValue && (
//             <h1>Seaarch Value: {searchValue}</h1>
//           )}

//           <TextInput searchValue={searchValue} handleChange={this.handleChange} />

//         </div>

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <p>Não exitem mais posts</p>
//         )}

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               text="Load More Posts"
//               onClick={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>

//       </section>

//     );
//   }
// }
