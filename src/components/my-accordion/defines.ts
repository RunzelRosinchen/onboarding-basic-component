/**
 *  ## DEFINE ALL INTERFACES FOR MyAccordion
 **/

/**
 * Props
 */
interface MyAccordionProps {
	number: number;
	json: string;
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
	openCloseAllItems: Function;
}

export { MyAccordionProps, MyAccordionState, MyAccordionMethods };
