import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'

function SearchBar({onFormSubmit}){

 const [search,setSearch] = useState('')

    return <Form onSubmit={(e)=>{
     e.preventDefault();
    onFormSubmit(search)

    }}>

    <Form.Group className="mb-3">
      <div style={{display:"flex"}}>
      <Form.Control type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <Button variant="danger" type="submit">Search</Button>
      </div>
    </Form.Group>
    </Form>

}
export default SearchBar