import s from './footer.module.scss'
export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={s.footer}>
            <small>Copyright © {year} Portfolio. All Rights Reserved</small>
        </footer>
    );
};

