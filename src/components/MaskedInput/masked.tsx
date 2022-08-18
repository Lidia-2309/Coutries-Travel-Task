import InputMask from 'react-input-mask';

const MaskedInput = () => {
    return (
            <InputMask
                className='form-control' 
                mask="999.999.999-99"
            />
    );
}

export default MaskedInput;

