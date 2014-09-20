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
        setContentView(R.layout.activity_main); // WebView��ü�� Activity�� �ٴ´�
        
        //activity�� ���� WebView ��ü�� �ּҰ� �ʿ� -> ���������� ������ URL�� �����ϱ� ����
        WebView wv = (WebView)(this.findViewById(R.id.webview));
        
        wv.setWebViewClient(new WebViewClient(){
        	@Override
        	public boolean shouldOverrideUrlLoading(WebView view, String url) {
        		// TODO Auto-generated method stub
        		return false; 
        		// �ȵ���̵忡�� ������ ���⸦ �������� �ʰ� ���� ������ ������ Ŭ����
        		// WebViewClient Ŭ������ ��ӹ���
        	}
        });
        
        //WebView�� �⺻������ �ڹٽ�ũ��Ʈ�� ��Ȱ��ȭ�Ѵ�. �ٲ������
        WebSettings setting = wv.getSettings();//WebView�� �ִ� WebSettings��ü�� ��
        setting.setJavaScriptEnabled(true);// Ȱ��ȭ
        
        // �ڹ� Ŭ���� MyClass�� �ڹٽ�ũ��Ʈ���� "calc"��� �̸����� ����ϵ��� ���
        wv.addJavascriptInterface(new MyCalc(), "calc");
        
        wv.loadUrl("file:///android_asset/www/index.html");
    }
    
}
