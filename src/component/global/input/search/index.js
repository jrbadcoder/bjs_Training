import React from 'react';
import _noop from 'lodash/noop';
import {Form,FormControl,Button}  from 'react-bootstrap';
// const { Search } = Input;

function SearchBox({
    placeholder = 'Search here',
    onSearch = _noop
}) {
    return (
        <div>
            <Form inline>
            <FormControl type="text" placeholder={placeholder} className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
    </Form>
        </div>
    )
}

export default SearchBox;