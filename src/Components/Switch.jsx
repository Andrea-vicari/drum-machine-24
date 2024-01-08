import Form from 'react-bootstrap/Form';

function Switch() {
  return (
    <Form>
        <p className='mb-0 fs-6 text-center'>REC</p>
      <Form.Switch // prettier-ignore
        type="switch"
        id="custom-switch"

      />

    </Form>
  );
}

export default Switch;