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
	openCloseAllItems: Function;
}

export { MyAccordionProps, MyAccordionState, MyAccordionMethods };
