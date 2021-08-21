import react from 'react';
import {
    Form,
    Input,
    Label,
    FormGroup,
    Button
} from 'reactstrap'
import {Link} from 'react-router-dom'
export const EditCountry=()=>
{
    return(
        <Form>
            <FormGroup>
                <Label>edit</Label>
                <Input type="text" placeholder="enter name"/>
            </FormGroup>
            <Button type="submit"> submit</Button>
            <Link to="/" className="btn btn-danger ml">cancel</Link>
        </Form>
    )
}