/* Instruments */
import type { ReduxState } from '@/store';

// 下面的函数被称为选择器（selector），它允许我们从状态中选择一个值。
// 选择器也可以内联定义在它们使用的地方，而不是在slice文件中。
// 例如： useSelector((state：RootState) => state.counter.value)

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectCount = (state: ReduxState) => state.counter.value;
