import Container from './components/Container';
import TodoCard from './components/todo/TodoCard';
import TodoBox from './components/TodoBox';

const App = () => {
  return (
    <div className='p-3'>
      <Container className='flex gap-3 overflow-x-scroll scrollbar-hr pb-3'>
        <TodoBox
          title='Incomplete'
          count='0'
          isIcon
          iconColor='bg-[#D21010]'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
        <TodoBox
          title='To Do'
          count='0'
          isIcon
          iconColor='bg-[#00B5FF]'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
        <TodoBox
          title='Doing'
          count='0'
          isIcon
          iconColor='bg-[#FFE700]'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
        <TodoBox
          title='Under Review'
          count='0'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
        <TodoBox
          title='Completed'
          count='0'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
        <TodoBox
          title='Overdate'
          count='0'
          card={
            <div className='space-y-3 max-h-[700px] overflow-y-scroll scrollbar-vr'>
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
            </div>
          }
        />
      </Container>
    </div>
  );
};

export default App;
