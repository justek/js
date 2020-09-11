var day = new Date().getDay(); // utworzenie obiektu daty i wyciągnięcie z niego nr dnia tygodnia 0 - niedziela; 1 - poniedziałek itd

switch(day){

	case 0:

		console.log("Jest niedziela");

		break;

	case 1:

		console.log("Jest poniedziałek");

		break;

	case 2:

		console.log("Jest wtorek");

		break;

	case 3:

		console.log("Jest środa");

		break;

	case 4:

		console.log("Jest czwartek");

		break;

	case 5:

		console.log("Jest piątek");

		break;

	case 6:

		console.log("Jest sobota");

		break;

	default:

		console.log("Nie mam zielonego pojęcia!");

}
