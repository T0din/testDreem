import List from './list/index';

export default function App() {
    return (
        <div
            style={{
                margin: '50px',
                backgroundImage: `url('https://dreem.com/static/img/home/dreem-woman.png')`,
                height: '100vh',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <List />
        </div>
    );
}
