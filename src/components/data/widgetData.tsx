const widgetData: { 
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[] 
  = 
[
  {
    languageName: "C#",
    text:[
    {
      information:"For more information, see Setting Up a C# Development Environment,\nIf you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:",
      command:"Install-Package Google.Apis"
    },
    {
      information:"If you are using .NET Core command-line interface tools to install your dependencies, run the following command:",
      command:"dotnet add package Google.Apis"

    }
  ]
  },
  {
    languageName: "Go",
    text:[
      {
        information: "For more information, see Setting Up a Go Development Environment.",
        command:"go get cloud.google.com/go/speech/apiv1"
      }
    ]
  },

  {
    languageName: "Java",
    text:[
    {
      information:"For more information, see Setting Up a Java Development Environment. \nIf you are using Maven, add the following to your pom.xml file. For more information about BOMs, see The Google Cloud Platform Libraries BOM."
      ,
      command:`
      <dependencyManagement>
        <dependencies>
          <dependency>
            <groupId>com.google.cloud</groupId>
            <artifactId>libraries-bom</artifactId>
            <version>24.4.0</version>
            <type>pom</type>
            <scope>import</scope>
          </dependency>
        </dependencies>
      </dependencyManagement>

      <dependencies>
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>20220320</version>
        </dependency>
        <dependency>
          <groupId>com.google.cloud</groupId>
          <artifactId>google-cloud-speech</artifactId>
        </dependency>
      </dependencies>
      `
    },
    {
      information:"If you are using Gradle, add the following to your dependencies:",
      command:"implementation platform('com.google.cloud:libraries-bom:25.0.0') \n implementation 'com.google.cloud:google-cloud-speech'"

    },
    {
      information:"If you are using sbt, add the following to your dependencies:",
      command:"libraryDependencies += 'com.google.cloud' % 'google-cloud-speech' % '2.2.11'"

    }
  ]
  },
  {
    languageName: "Node.js",
    text:[
      {
        information: "For more information, see Setting Up a Node.js Development Environment.",
        command:"npm install --save @google-cloud/speech"
      }
    ]
  },
  {
    languageName: "PHP",
    text:[
      {
        information: "For more information, see Using PHP on Google Cloud.",
        command:"composer require google/apiclient"
      }
    ]
  },
  {
    languageName: "Python",
    text:[
      {
        information: "For more information, see Setting Up a Python Development Environment.",
        command:"pip install --upgrade google-cloud-speech"
      }
    ]
  },
  {
    languageName: "Ruby",
    text:[
      {
        information: "For more information, see Setting Up a Ruby Development Environment.",
        command:"gem install google-api-client"
      }
    ]
  },

];



export default widgetData;