import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(); // Chama a função de pesquisa ao pressionar Enter
    }
  };

  return (
    <div className="relative w-[1200px] max-w-xl">
      <input
        type="text"
        placeholder="Pesquisar Produto..."
        className="bg-gray-100 rounded-md p-4 pl-3 pr-10 w-full"
        onChange={onChange} // Atualiza o estado da busca
        onKeyDown={handleKeyDown} // Detecta a tecla Enter
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <CiSearch className="text-gray-400" size={22} />
      </div>
    </div>
  );
};

export default SearchInput;
