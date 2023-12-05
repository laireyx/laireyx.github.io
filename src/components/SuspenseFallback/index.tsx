import Title from '@components/Title';

import { suspenseFallbackStyle } from './index.css';

export default function SuspenseFallback() {
  return (
    <div className={suspenseFallbackStyle}>
      <Title>Loading</Title>
    </div>
  );
}
