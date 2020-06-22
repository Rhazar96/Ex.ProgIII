package com.example.ex2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onClick(View v){
        EditText centim = findViewById(R.id.centimetros);
        TextView poleg =  findViewById(R.id.polegadas);
        double centimetros = Double.valueOf(centim.getText().toString());
        double polegadas = centimetros*0.39270;
        poleg.setText(String.valueOf(polegadas));
    }
}