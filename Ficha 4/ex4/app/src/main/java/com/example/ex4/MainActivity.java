package com.example.ex4;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void AdicionarContacto(View v) {


        Intent intent = new Intent (ContactsContract.Intents.Insert.ACTION);
        intent.setType(ContactsContract.RawContacts.CONTENT_TYPE);

        EditText nome = (EditText) findViewById(R.id.textNome);
        EditText apelido = (EditText) findViewById(R.id.textApelido);
        EditText tel = (EditText) findViewById(R.id.textTelemovel);
        EditText email = (EditText) findViewById(R.id.textEmail);

        intent
                .putExtra(ContactsContract.Intents.Insert.EMAIL, email.getText())
                .putExtra(ContactsContract.Intents.Insert.EMAIL_TYPE, ContactsContract.CommonDataKinds.Email.TYPE_WORK)
                .putExtra(ContactsContract.Intents.Insert.PHONE, tel.getText())
                .putExtra(ContactsContract.Intents.Insert.PHONE_TYPE, ContactsContract.CommonDataKinds.Phone.TYPE_WORK)
                .putExtra(ContactsContract.Intents.Insert.NAME, nome.getText() + " " + apelido.getText())
        ;

        startActivity(intent);

    }
}