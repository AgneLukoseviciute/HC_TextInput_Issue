#pragma once
#include "MainPage.g.h"
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::HC_TextInput_Issue::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();
    };
}

namespace winrt::HC_TextInput_Issue::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}

