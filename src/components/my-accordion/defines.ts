/**
 *  ## DEFINE ALL INTERFACES FOR MyAccordion
 **/

/**
 * Props
 */
interface MyAccordionProps {
	api: string;
}

/**
 * State
 */
interface MyAccordionState {}

/**
 * Methods
 */
interface MyAccordionMethods {
	openAccordionItem: Function;
	toggleAllItems: Function;
	changeToggleAllButtonText: Function;
	init: Function;
	fetchData: Function;
}

export { MyAccordionProps, MyAccordionState, MyAccordionMethods };
