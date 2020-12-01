#include<stdio.h>

int main()
{
    char pax[]="Juan sin miedo";
    printf("%s %s \n",pax,&pax[4]);
    puts(&pax[4]);
    return 0;
}