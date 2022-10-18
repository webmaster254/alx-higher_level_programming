#include <stdio.h>
#include <stdlib.h>
#include "lists.h"
/**
 * check_cycle - checks for cycles in loop
 * @list: list to take in
 * Return: integer value
 */
int check_cycle(listint_t *list)
{
	listint_t *new1, *new2;

	new1 = list;
	new2 = list;
	while (new1 != NULL && new2 != NULL)
	{
		new1 = new1->next;
		if (new2->next)
			new2 = new2->next->next;

		if (new1 == new2)
			return (1);
	}
	return (0);
}
