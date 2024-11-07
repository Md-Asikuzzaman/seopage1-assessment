// import Container from './components/Container';
import Container from './components/Container';
import TodoBox from './components/TodoBox';

const App = () => {
  return (
    <div className='min-h-screen mt-5'>
      <Container className='flex gap-3 overflow-x-scroll'>
        <TodoBox title='Incomplete' count='0' isIcon iconColor='bg-[#D21010]' />
        <TodoBox title='To Do' count='0' isIcon iconColor='bg-[#00B5FF]' />
        <TodoBox title='Doing' count='0' isIcon iconColor='bg-[#FFE700]' />
        <TodoBox title='Under Review' count='0' />
        <TodoBox title='Completed' count='0' />
        <TodoBox title='Overdate' count='0' />
      </Container>
    </div>
  );
};

export default App;
