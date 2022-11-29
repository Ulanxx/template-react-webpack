import cn from 'classnames';
import styles from './index.module.less'

export interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return <div className={cn(styles.container)}>Hello {name}</div>;
}
