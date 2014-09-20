package java56.hello;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;


public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // WebView객체가 Activity에 붙는다
        
        //activity에 붙은 WebView 객체의 주소가 필요 -> 웹페이지를 가져올 URL을 지정하기 위해
        WebView wv = (WebView)(this.findViewById(R.id.webview));
        
        wv.setWebViewClient(new WebViewClient(){
        	@Override
        	public boolean shouldOverrideUrlLoading(WebView view, String url) {
        		// TODO Auto-generated method stub
        		return false; 
        		// 안드로이드에게 페이지 열기를 위임하지 않고 내가 열도록 설정한 클래스
        		// WebViewClient 클래스를 상속받음
        	}
        });
        
        //WebView는 기본적으로 자바스크립트를 비활성화한다. 바꿔줘야함
        WebSettings setting = wv.getSettings();//WebView에 있는 WebSettings객체를 얻어서
        setting.setJavaScriptEnabled(true);// 활성화
        
        // 자바 클래스 MyClass를 자바스크립트에서 "calc"라는 이름으로 사용하도록 등록
        wv.addJavascriptInterface(new MyCalc(), "calc");
        
        wv.loadUrl("file:///android_asset/www/index.html");
    }
    
}
