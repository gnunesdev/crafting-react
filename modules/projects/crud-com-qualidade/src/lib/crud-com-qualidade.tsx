import styles from './crud-com-qualidade.module.css';

/* eslint-disable-next-line */
export interface CrudComQualidadeProps {}

export function CrudComQualidade(props: CrudComQualidadeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CrudComQualidade!</h1>
    </div>
  );
}

export default CrudComQualidade;
