import ErrorMsg from './ErrorMsg'

const Input = ({ error, onChange, value }: { error?: string, onChange?: (e: any) => void, value?: string, }) => {
    console.log({ error });
    return (
        <div>
            <label>Name</label>
            <input
                type='text'
                placeholder='Enter your name'
                onChange={onChange}
                value={value}
            />
            <ErrorMsg>
                {error}
            </ErrorMsg>
        </div>
    )
}

export default Input
