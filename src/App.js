import React from 'react'
import CircularProgressIndicator from './common/Loadable/CircularProgressIndicator';
import Routes from './routes/routes';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  // const allBlogs = useSelector((state) => state.blog.value);

  // const getAllBlog = useQueryGetAllBlogs();

  // useEffect(() => {
  //   if (!getAllBlog.isLoading) {
  //     dispatch(addAllblogs(getAllBlog?.data));
  //   }
  // }, [getAllBlog]);

  return (
    <>
      <CircularProgressIndicator loading={false} />
      <Toaster />
      <Routes />
    </>
  );
};

export default App;