import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup borderRadius={400}>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search games" variant={"filled"} />;
    </InputGroup>
  );
};

export default SearchInput;