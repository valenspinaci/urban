import Spinner from 'react-bootstrap/Spinner';

const Loading = ()=> {
    return (
        <Spinner className='mt-5' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default Loading;