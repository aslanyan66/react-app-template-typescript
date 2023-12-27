import { useAppDispatch, useAppSelector } from 'store/hooks';
import { increment, decrement } from 'components/features/counter/counterSlice';
import { Button, Flex } from 'antd';

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <Flex gap="small" wrap="wrap">
      <p>Counter: {counter}</p>
      <Button type="primary" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Flex>
  );
};

export default Counter;
