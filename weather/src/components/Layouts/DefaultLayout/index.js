import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'
import className from 'classnames/bind'

const cx = className.bind(styles)

function Defaultlayout({ children }) {
    return (
        <div className={cx('container')}>
            <Sidebar/>
            <div className={cx('main')}>
                <Header/>
                <div className={cx('content')}>{ children }</div>
            </div>
        </div>
    )
}

export default Defaultlayout;