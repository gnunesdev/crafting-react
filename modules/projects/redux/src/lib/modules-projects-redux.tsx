import styles from './modules-projects-redux.module.css';

/* eslint-disable-next-line */
export interface ModulesProjectsReduxProps {}

export function ModulesProjectsRedux(props: ModulesProjectsReduxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesProjectsRedux!</h1>
    </div>
  );
}

export default ModulesProjectsRedux;
