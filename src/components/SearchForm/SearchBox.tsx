import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import css from './SearchBox.module.css';
import { SearchBoxProps } from '../../types/interfaces';


export const SearchBox: React.FC<SearchBoxProps> = ({ onSubmitInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setInputValue(value);
  };

  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Please write something!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    onSubmitInput(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.from}>
      <input
        type="text"
        placeholder="Search films"
        value={inputValue}
        autoFocus
        onChange={handleChange}
        autoComplete="off"
        className={css.input}
      />
      <button type="submit" className={css.submitBtn}>
        Search
      </button>
    </form>
  );
};