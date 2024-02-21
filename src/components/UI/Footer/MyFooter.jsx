import classes from "./MyFooter.module.css";

const MyFooter = () => {
	return (
		<footer className={classes.footer}>
			<span>Разработчик сайта: Адилгереев Артем (Специалист ОТ)</span>
			<span>Помощь в реализации: Кононенко Екатерина (Начальник ОТ)</span>
			<span>Помощь в доработке дизайна: Данил Мазниченко (Специалист ООП)</span>
			<span>Помощь в заполнении: Штат отдела телемаркетинга</span>
		</footer>
	);
};

export default MyFooter;