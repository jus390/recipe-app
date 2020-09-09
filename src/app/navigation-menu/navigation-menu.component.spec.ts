import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { NavigationMenuComponent } from './navigation-menu.component';

import { MatMenuModule } from "@angular/material/menu";
import { MatMenuHarness, MatMenuItemHarness } from "@angular/material/menu/testing";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonHarness } from "@angular/material/button/testing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatMenuModule, MatIconModule, MatButtonModule],
      declarations: [NavigationMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it("Pressing the navigation-button opens the menu", async () => {
    const navButton = await loader.getHarness(MatButtonHarness.with({
      selector: "#navigation-button"
    }))
    const menu = await loader.getHarness(MatMenuHarness);

    await navButton.click()
    expect(await menu.isOpen()).toBe(true)
  })

  it("Pressing the navigation-button 2 times closes the menu", async () => {
    const navButton = await loader.getHarness(MatButtonHarness.with({
      selector: "#navigation-button"
    }))
    const menu = await loader.getHarness(MatMenuHarness);

    await navButton.click()
    expect(await menu.isOpen()).toBe(true)

    await navButton.click()
    expect(await menu.isOpen()).toBe(false)
  })

});
