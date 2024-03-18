#ifndef LAB8_H
#define LAB8_H
union Extra_Info
{
        int bday[5];
        char ophone[20];
};

typedef struct Node
{
        char first_name[20];
        char last_name[20];
        char phone_number[12];
        union Extra_Info info;
        int flag;
        struct Node *next;
}NODE;

extern NODE *head[3];

void read_from_keyboard();
int checkduplicate(char *first_name, char *last_name);
void insert(NODE *);
void read_from_file(char *);
void save_to_file(char *);
void delete_all();
void show_all();
void show_names();
int delete_entry();
int delete_names();
#endif
