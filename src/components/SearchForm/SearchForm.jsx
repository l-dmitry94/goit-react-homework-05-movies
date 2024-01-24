import Styled from './SearchForm.styled';

const { Form, Input, SearchIcon, FormWrapper, SearchButton } = Styled;

const SearchForm = ({
    inputValue,
    handleChange,
    handleSubmit,
    type = 'submit',
}) => {
    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="search"
                    placeholder='Search...'
                    value={inputValue}
                    onChange={handleChange}
                />
                <SearchButton type={type}>
                    <SearchIcon />
                </SearchButton>
            </Form>
        </FormWrapper>
    );
};

export default SearchForm;
