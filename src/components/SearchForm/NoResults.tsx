import css from './SearchBox.module.css';

interface NoResultsProps {
  search: string;
}

export const NoResults: React.FC<NoResultsProps> = ({ search }) => {
  return (
    <p className={css.noResMess}>
      There is no movies matching your search: '{search}'
    </p>
  );
};